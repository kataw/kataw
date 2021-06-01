# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/expressions/arrow/type-annotation/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\arrow\type-annotation\gen\strict_directive
> :: test: strict directive
> :: case: (x: string, ...[y: string]: string) =>  {};
## Input

`````js
"use strict"; (x: string, ...[y: string]: string) =>  {};
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
                    "start": 13,
                    "end": 16
                },
                "flags": 32,
                "start": 13,
                "end": 16
            },
            "flags": 16,
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
                        "start": 17,
                        "end": 24
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 25,
                        "end": 25
                    }
                ],
                "flags": 32,
                "start": 17,
                "end": 25
            },
            "flags": 16,
            "start": 17,
            "end": 25
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
                            "start": 30,
                            "end": 31
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 30,
                    "end": 31
                },
                "flags": 32,
                "start": 29,
                "end": 31
            },
            "flags": 16,
            "start": 29,
            "end": 31
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 32,
                "end": 39
            },
            "flags": 16,
            "start": 32,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 41,
                "end": 48
            },
            "flags": 16,
            "start": 41,
            "end": 48
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 55,
                "end": 55
            },
            "flags": 16,
            "start": 52,
            "end": 56
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 56,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (x: string, ...[y: string]: string) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 16, end: 17
✖ Identifier expected - start: 25, end: 29
✖ ',' expected - start: 31, end: 32
✖ Expected a `;` - start: 39, end: 40
✖ Declaration or statement expected - start: 40, end: 41
✖ Expected a `;` - start: 48, end: 49
✖ Declaration or statement expected - start: 49, end: 52

```

