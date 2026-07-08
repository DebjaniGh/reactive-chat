import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Consistent sizing across the app. If every component passes its own pixel value, 
 * you'd end up with avatars at 31px, 33px, 38px — visual inconsistency.
 */
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';  

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
/**
 * Reusable chat avatar that displays either a profile image or letter initials as a fallback,
 * along with an optional online/offline status indicator.
 */
export class AvatarComponent implements OnChanges {
  @Input() src: string | null = null; // URL of the user's profile picture
  @Input() name: string = ''; // User's full name for generating initials
  @Input() size: AvatarSize = 'md'; // Size of the avatar (xs, sm, md, lg, xl)
  @Input() status: 'online' | 'offline' | 'away' | null = null; // Whether the user is online (null = no status indicator)

  initials = ''; // First two letters of the user's name
  bgColor = ''; // Background color for the initials
  imgError = false; // Whether the image failed to load

  private readonly palette = [
    '#6366f1', '#8b5cf6', '#ec4899', '#f43f5e',
    '#f97316', '#eab308', '#22c55e', '#14b8a6',
    '#3b82f6', '#06b6d4'
  ];

  ngOnChanges(): void {
    this.imgError = false;
    this.initials = this.getInitials(this.name);
    this.bgColor = this.getColor(this.name);
  }

  onImgError(): void {
    this.imgError = true;
  }

  get showImage(): boolean {
    return !!this.src && !this.imgError;
  }

  // Extracts display initials from the name:
  private getInitials(name: string): string {
    if (!name) return '?';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  // Generates a consistent background color based on the name
  private getColor(name: string): string {
    if (!name) return this.palette[0];
    const code = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    return this.palette[code % this.palette.length];
  }
}
