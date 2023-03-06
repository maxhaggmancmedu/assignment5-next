import Stickman from "../stickman/stickman"

export const metadata = {
    title: 'Page',
  }

export default function Page() {
    return (
        <div>
            <h1>This is the first page after intro</h1>
            <Stickman />
        </div>
    )
}