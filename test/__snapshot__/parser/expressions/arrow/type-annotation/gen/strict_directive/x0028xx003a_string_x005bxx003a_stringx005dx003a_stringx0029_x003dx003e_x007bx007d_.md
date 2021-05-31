# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/arrow/type-annotation/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\arrow\type-annotation\gen\strict_directive
> :: test: strict directive
> :: case: (x: string, [x: string]: string) =>  {};
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
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 27,
                                    "end": 28
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 27,
                            "end": 28
                        },
                        "flags": 32,
                        "start": 25,
                        "end": 28
                    }
                ],
                "flags": 32,
                "start": 17,
                "end": 28
            },
            "flags": 16,
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
                "start": 29,
                "end": 36
            },
            "flags": 16,
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
                "start": 38,
                "end": 45
            },
            "flags": 16,
            "start": 38,
            "end": 45
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 52,
                "end": 52
            },
            "flags": 16,
            "start": 49,
            "end": 53
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 53,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (x: string, [x: string]: string) =>  {};",
    "fileName": "__root__",
    "flags": 0,
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
✖ Expected a `;` - start: 36, end: 37
✖ Declaration or statement expected - start: 37, end: 38
✖ Expected a `;` - start: 45, end: 46
✖ Declaration or statement expected - start: 46, end: 49

```

