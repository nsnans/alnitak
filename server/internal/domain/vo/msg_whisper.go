package vo

import "time"

const (
	WHISPER_GROUP_FIELD   = "`uid`,`created_at`,`content`,`status`"
	WHISPER_DETAILS_FIELD = "`fid`,`fromId`,`content`,`created_at`"
)

// 消息列表
type WhisperGroupResp struct {
	CreatedAt time.Time    `json:"createdAt"`
	Content   string       `json:"content"`
	Uid       uint         `json:"uid"`
	Status    bool         `json:"status" ` //已读状态
	User      UserInfoResp `json:"user" gorm:"-"`
}

// 消息详情
type WhisperDetailsResp struct {
	Fid       uint      `json:"fid"`
	FromId    uint      `json:"fromId"`
	Content   string    `json:"content"`
	CreatedAt time.Time `json:"createdAt"`
}

// 消息
type WhisperResp struct {
	Fid     uint   `json:"fid"`
	Content string `json:"content"`
}
