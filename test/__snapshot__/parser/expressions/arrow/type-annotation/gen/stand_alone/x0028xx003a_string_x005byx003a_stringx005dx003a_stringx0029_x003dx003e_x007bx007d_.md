# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/arrow/type-annotation/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\arrow\type-annotation\gen\stand_alone
> :: test: stand alone
> :: case: (x: string, [y: string]: string) =>  {};
## Input

`````js
(x: string, [y: string]: string) =>  {};
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
                    "flags": 32,
                    "start": 0,
                    "end": 2
                },
                "flags": 32,
                "start": 0,
                "end": 2
            },
            "flags": 16,
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
                        "start": 3,
                        "end": 10
                    },
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 14
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 13,
                            "end": 14
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 14
                    }
                ],
                "flags": 32,
                "start": 3,
                "end": 14
            },
            "flags": 16,
            "start": 3,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 15,
                "end": 22
            },
            "flags": 16,
            "start": 15,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 24,
                "end": 31
            },
            "flags": 16,
            "start": 24,
            "end": 31
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 38,
                "end": 38
            },
            "flags": 16,
            "start": 35,
            "end": 39
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 39,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "(x: string, [y: string]: string) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 2, end: 3
✖ ',' expected - start: 14, end: 15
✖ Expected a `;` - start: 22, end: 23
✖ Declaration or statement expected - start: 23, end: 24
✖ Expected a `;` - start: 31, end: 32
✖ Declaration or statement expected - start: 32, end: 35

```

