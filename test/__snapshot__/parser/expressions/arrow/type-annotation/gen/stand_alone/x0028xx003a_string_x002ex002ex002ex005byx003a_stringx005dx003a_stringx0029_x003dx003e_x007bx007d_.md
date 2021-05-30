# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: kataw7/test\__snapshot__/parser/expressions/arrow/type-annotation/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\arrow\type-annotation\gen\stand_alone
> :: test: stand alone
> :: case: (x: string, ...[y: string]: string) =>  {};
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
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 11,
                        "end": 11
                    }
                ],
                "flags": 32,
                "start": 3,
                "end": 11
            },
            "flags": 16,
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
                            "start": 16,
                            "end": 17
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 16,
                    "end": 17
                },
                "flags": 32,
                "start": 15,
                "end": 17
            },
            "flags": 16,
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
                "start": 18,
                "end": 25
            },
            "flags": 16,
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
                "start": 27,
                "end": 34
            },
            "flags": 16,
            "start": 27,
            "end": 34
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 41,
                "end": 41
            },
            "flags": 16,
            "start": 38,
            "end": 42
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 42,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "(x: string, ...[y: string]: string) =>  {};",
    "fileName": "__root__",
    "flags": 0,
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
✖ Expected a `;` - start: 25, end: 26
✖ Declaration or statement expected - start: 26, end: 27
✖ Expected a `;` - start: 34, end: 35
✖ Declaration or statement expected - start: 35, end: 38

```

