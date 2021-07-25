# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/type-annotation/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/type-annotation/gen/stand_alone
> :: test: stand alone
> :: case: (x: string, ...[y: string]: string) =>  {};
## Options

`````js
{}
`````
## Input

`````js
(x: string, ...[y: string]: string) =>  {};
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 2
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "string",
                        "rawText": "string",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 10
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 11
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 3,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 17
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 17
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 15,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 15,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "transformFlags": 0,
                "start": 18,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 18,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "transformFlags": 0,
                "start": 27,
                "end": 34
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 27,
            "end": 34
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 41,
                "end": 41
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 38,
            "end": 42
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 42,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "(x: string, ...[y: string]: string) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 2, end: 3
✖ Identifier expected - start: 11, end: 15
✖ ',' expected - start: 17, end: 18
✖ ']' is not allowed here. Did you mean ';'? - start: 25, end: 26
✖ Declaration or statement expected - start: 26, end: 27
✖ ')' is not allowed here. Did you mean ';'? - start: 34, end: 35
✖ Declaration or statement expected - start: 35, end: 38

```

