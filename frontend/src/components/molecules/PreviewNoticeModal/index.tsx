import { Divider, List, ListItem, Stack } from '@mui/material'
import Dialog from '../../atoms/Dialog'
import { PREVIEW_NOTICE_MODAL_ACTIONS, Pre_Adverse_Notice_Data } from '../../../mocks/mockData'
import theme from '../../../theme'
import {
  PRE_ADVERSE_ACTION_CARD_USER_GREETS,
  PRE_ADVERSE_ACTION_CARD_CONTENT,
  PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER,
  PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER_ONE,
  PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER_TWO,
  PREVIEW_NOTICE_MODAL_TITLE,
  PREVIEW_NOTICE_MODAL_ATTACHMENTS,
  PREVIEW_NOTICE_MODAL_ATTACHMENTS_ONE,
  PREVIEW_NOTICE_MODAL_ATTACHMENTS_TWO,
  PREVIEW_NOTICE_MODAL_BUTTON_LABEL,
  PREVIEW_NOTICE_MODAL_CHARGES,
  PREVIEW_NOTICE_MODAL_STACK_SX,
  PREVIEW_NOTICE_MODAL_LIST_SX,
  PREVIEW_NOTICE_MODAL_BUTTON_SX,
  PREVIEW_NOTICE_MODAL_DIVIDER_SX,
  PREVIEW_NOTICE_MODAL_ASSAULT_SX
} from '../../../utils/constants'
import Typography from '../../atoms/Typography'
import IconComponent from '../../atoms/icon'
import MuiButton from '../../atoms/Button'
import CLOSE_ICON_LOGO from '../../../../public/assets/icons/Close.svg'
import ATTACHMENT_LOGO from '../../../../public/assets/icons/Attachment.svg'
import React from 'react'
import {
  PreviewNoticeModalPropsInterface,
  StyledTypographyPropsInterface
} from '../../../utils/interfaces'

const StyledTypography = ({ label, content }: StyledTypographyPropsInterface) => {
  return (
    <Stack direction="row" gap={1} mb={3} pl={4}>
      <Typography
        variant="caption3"
        text={`${label}: `}
        color={theme.palette.textColor.highEmphasis}
      />
      <Typography
        variant="caption3"
        text={content}
        color={theme.palette.textColor.mediumEmphasis}
      />
    </Stack>
  )
}

const PreviewNoticeModal = ({
  isOpen,
  onClose,
  onSubmit,
  sx
}: PreviewNoticeModalPropsInterface) => {
  return (
    <Dialog
      style={sx}
      open={isOpen}
      children={
        <Stack>
          <Stack direction="row" justifyContent="space-between" p={4}>
            <Typography
              text={PREVIEW_NOTICE_MODAL_TITLE}
              variant="subtitle1"
              color={theme.palette.textColor.highEmphasis}
            />
            <IconComponent src={CLOSE_ICON_LOGO} onClick={onClose} />
          </Stack>
          <Divider sx={PREVIEW_NOTICE_MODAL_DIVIDER_SX} />
          {Pre_Adverse_Notice_Data.map((data) => {
            return <StyledTypography key={data.id} label={data.label} content={data.content} />
          })}

          <Stack sx={PREVIEW_NOTICE_MODAL_STACK_SX}>
            <List sx={PREVIEW_NOTICE_MODAL_LIST_SX}>
              {PREVIEW_NOTICE_MODAL_ACTIONS.map((item) => (
                <ListItem key={item.id} sx={{ p: 0 }}>
                  <Typography
                    text={item.label}
                    variant="caption2"
                    color={theme.palette.accent.red}
                  />
                </ListItem>
              ))}
            </List>
          </Stack>

          <Stack p={4}>
            <Typography
              text={PRE_ADVERSE_ACTION_CARD_USER_GREETS}
              variant="caption2"
              color={theme.palette.textColor.mediumEmphasis}
              mt={6}
            />
            <Typography
              text={PRE_ADVERSE_ACTION_CARD_CONTENT}
              variant="caption2"
              color={theme.palette.textColor.mediumEmphasis}
              mt={3}
            />

            <Stack>
              <List sx={PREVIEW_NOTICE_MODAL_ASSAULT_SX}>
                <ListItem sx={{ pl: 0, pb: 0 }}>
                  <Typography
                    text={PREVIEW_NOTICE_MODAL_CHARGES}
                    variant="caption2"
                    color={theme.palette.textColor.mediumEmphasis}
                    mt={6}
                  />
                </ListItem>
              </List>
            </Stack>

            <Typography
              text={PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER}
              variant="caption2"
              color={theme.palette.textColor.mediumEmphasis}
              mt={6}
              mb={5}
            />
            <Typography
              text={PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER_ONE}
              variant="caption2"
              color={theme.palette.textColor.mediumEmphasis}
            />
            <Typography
              text={PRE_ADVERSE_ACTION_CARD_ACTION_FOOTER_TWO}
              variant="caption2"
              color={theme.palette.textColor.mediumEmphasis}
            />

            <Stack mt={6} gap={3}>
              <Typography
                text={PREVIEW_NOTICE_MODAL_ATTACHMENTS}
                variant="caption3"
                color={theme.palette.textColor.highEmphasis}
              />
              <Stack direction="row" gap={2}>
                <IconComponent src={ATTACHMENT_LOGO} />
                <Typography
                  text={PREVIEW_NOTICE_MODAL_ATTACHMENTS_ONE}
                  variant="caption2"
                  color={theme.palette.textColor.mediumEmphasis}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <IconComponent src={ATTACHMENT_LOGO} />
                <Typography
                  text={PREVIEW_NOTICE_MODAL_ATTACHMENTS_TWO}
                  variant="caption2"
                  color={theme.palette.textColor.mediumEmphasis}
                />
              </Stack>
            </Stack>
          </Stack>

          <Divider sx={{ mt: 6 }} />
          <Stack p={4} direction="row" alignSelf="self-end">
            <MuiButton
              children={PREVIEW_NOTICE_MODAL_BUTTON_LABEL}
              variant="contained"
              sx={PREVIEW_NOTICE_MODAL_BUTTON_SX}
              onClick={onSubmit}
            />
          </Stack>
        </Stack>
      }
    />
  )
}

export default PreviewNoticeModal
