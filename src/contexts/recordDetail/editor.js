import React from 'react'
import Button from '@pndr/button'
import { css } from 'emotion'
import TextArea from '../../TextArea'
import Preview from '../../Preview'

const TabItem = ({ onClick, active, children }) => (
    <div
        className={css`
            margin-right: 8px;
        `}
    >
        <Button
            size={'sm'}
            minimal={true}
            highlighted={active}
            onClick={onClick}
        >
            {children}
        </Button>
    </div>
)

export default class RecordDetail extends React.Component {

    state = {
        editing: true
    }

    render() {

        return (
            <div>
                <div
                    className={css`
                        display: flex;
                        align-items: center;
                        margin-bottom: 24px;
                    `}
                >
                    <TabItem active={this.state.editing} onClick={() => this.setState({ editing: true })}>
                        {this.props.writeButtonLabel}
                    </TabItem>
                    <TabItem active={!this.state.editing} onClick={() => this.setState({ editing: false })}>
                        {this.props.previewButtonLabel}
                    </TabItem>
                </div>
                <div>
                    {this.state.editing ? (
                        <TextArea
                            value={this.props.longText}
                            onChange={this.handleChange}
                        />
                    ) : null}
                    {!this.state.editing ? (
                        <Preview
                            value={this.props.longText}
                        />
                    ) : null}
                </div>
            </div>
        )
    }

    handleChange = ({ value }) => {

        if (!this.props.onChange) {
            return
        }

        this.props.onChange({
            id: this.props.id,
            longText: value
        })
    }
}