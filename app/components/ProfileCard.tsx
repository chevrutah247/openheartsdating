'use client'

import Link from 'next/link'
import { getDisabilityLabel, getLookingForLabel } from '@/lib/constants'

interface Profile {
  id: string
  display_name: string
  age: number
  location: string
  bio: string
  disability_type: string
  looking_for: string
  interests: string[]
  photo_url: string | null
}

interface ProfileCardProps {
  profile: Profile
  liked: boolean
  onLike: () => void
  onUnlike: () => void
}

export default function ProfileCard({ profile, liked, onLike, onUnlike }: ProfileCardProps) {
  const initial = profile.display_name?.charAt(0).toUpperCase() || '?'

  return (
    <div className="profile-card">
      {/* Photo area */}
      <div className="profile-card-photo">
        {profile.photo_url ? (
          <img src={profile.photo_url} alt={`${profile.display_name}'s photo`} />
        ) : (
          <div className="initials">{initial}</div>
        )}
        <div className="profile-card-overlay">
          <h3>{profile.display_name || 'Anonymous'}{profile.age ? `, ${profile.age}` : ''}</h3>
          {profile.location && <p>{profile.location}</p>}
        </div>
      </div>

      {/* Body */}
      <div className="profile-card-body">
        {profile.bio && (
          <p className="bio">
            {profile.bio.length > 180 ? profile.bio.substring(0, 180) + '...' : profile.bio}
          </p>
        )}

        <div className="profile-card-tags">
          {profile.looking_for && (
            <span className="profile-card-tag looking-for">
              {getLookingForLabel(profile.looking_for)}
            </span>
          )}
          {profile.disability_type && profile.disability_type !== 'none' && profile.disability_type !== 'prefer_not_to_say' && (
            <span className="profile-card-tag disability">
              {getDisabilityLabel(profile.disability_type)}
            </span>
          )}
          {profile.interests?.slice(0, 3).map((interest, i) => (
            <span key={i} className="profile-card-tag interest">{interest}</span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="profile-card-actions">
        <Link href={`/profile/${profile.id}`} className="btn-view">
          View
        </Link>
        {liked ? (
          <button onClick={onUnlike} className="btn-unlike">
            Unlike
          </button>
        ) : (
          <button onClick={onLike} className="btn-like">
            Like
          </button>
        )}
      </div>
    </div>
  )
}
