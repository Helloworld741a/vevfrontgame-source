# Vevfrontgame

This is a personal fork of [OpenFrontIO](https://github.com/openfrontio/OpenFrontIO) at upstream tag `v0.26.6` (commit `f552b006613c2dee52209801fe2875c64923fcc8`, 15 October 2025).

> Not affiliated with, endorsed by, or sponsored by OpenFront LLC, OpenFront Inc., or the OpenFrontIO project.

## License

- Code is licensed under the GNU Affero General Public License v3.0 (AGPL v3). See [LICENSE](LICENSE).
- Open assets (in `/resources`) are licensed under Creative Commons BY-SA 4.0. See [LICENSE-ASSETS](LICENSE-ASSETS).

The `/proprietary` directory of the upstream project is not present in this fork. See [NOTICE.md](NOTICE.md) for attribution and [CHANGELOG.md](CHANGELOG.md) for the list of modifications.

## Attribution

This project is a fork of OpenFrontIO.

- Upstream source: https://github.com/openfrontio/OpenFrontIO
- Fork point: tag `v0.26.6`

## Prerequisites

- npm (v10.9.2 or higher)
- A modern web browser

## Installation

git clone <this-repository-url>
cd vevfrontgame
npm install

## Running locally

npm run dev

## Project Structure

- `/src/client` — frontend
- `/src/core` — shared game logic
- `/src/server` — backend
- `/resources` — static assets (CC BY-SA 4.0)

## AGPL v3 compliance note

When this code is deployed as a network service, the AGPL v3 license requires that the corresponding source code (including modifications) be made available to the users of the service. The footer of the running site links back to this public source repository for that purpose.