"""Application entry point."""

from app_utils import greet


def main() -> None:
    print(greet("world"))


if __name__ == "__main__":
    main()
