# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/type-annotation/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/type-annotation/gen/strict_directive
> :: test: strict directive
> :: case: (x: string, [x: string]: string) =>  {};
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (x: string, [x: string]: string) =>  {};
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
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
                    "start": 13,
                    "end": 16
                },
                "flags": 13,
                "transformFlags": 0,
                "start": 32,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 16
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
                        "start": 17,
                        "end": 24
                    },
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 28
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 28
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 25,
                        "end": 28
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 17,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 17,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "transformFlags": 0,
                "start": 29,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 29,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "transformFlags": 0,
                "start": 38,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 38,
            "end": 45
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 52,
                "end": 52
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 49,
            "end": 53
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 53,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (x: string, [x: string]: string) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 16, end: 17
✖ ',' expected - start: 28, end: 29
✖ ']' expected - start: 36, end: 37
✖ Declaration or statement expected - start: 37, end: 38
✖ ')' expected - start: 45, end: 46
✖ Declaration or statement expected - start: 46, end: 49

```

