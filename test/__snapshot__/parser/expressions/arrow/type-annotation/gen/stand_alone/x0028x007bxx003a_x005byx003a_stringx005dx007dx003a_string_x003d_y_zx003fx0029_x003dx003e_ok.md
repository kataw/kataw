# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/arrow/type-annotation/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\arrow\type-annotation\gen\stand_alone
> :: test: stand alone
> :: case: ({x: [y: string]}: string = y, z?) => ok
## Input

`````js
({x: [y: string]}: string = y, z?) => ok
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
                    "start": 0,
                    "end": 7
                },
                "flags": 32,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 8,
                "end": 15
            },
            "flags": 16,
            "start": 8,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "string",
                            "rawText": "string",
                            "flags": 96,
                            "start": 18,
                            "end": 25
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 25,
                            "end": 27
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 27,
                            "end": 29
                        },
                        "flags": 32,
                        "start": 18,
                        "end": 29
                    },
                    {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 30,
                            "end": 32
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 32,
                            "end": 33
                        },
                        "consequent": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 33,
                            "end": 33
                        },
                        "colonToken": null,
                        "alternate": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 33,
                            "end": 33
                        },
                        "flags": 32,
                        "start": 30,
                        "end": 33
                    }
                ],
                "flags": 32,
                "start": 18,
                "end": 33
            },
            "flags": 16,
            "start": 18,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "ok",
                "rawText": "ok",
                "flags": 96,
                "start": 37,
                "end": 40
            },
            "flags": 16,
            "start": 37,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "({x: [y: string]}: string = y, z?) => ok",
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
✖ ',' expected - start: 7, end: 8
✖ Expected a `;` - start: 15, end: 16
✖ Declaration or statement expected - start: 16, end: 17
✖ Declaration or statement expected - start: 17, end: 18
✖ Identifier expected - start: 33, end: 34
✖ Declaration or statement expected - start: 34, end: 37

```

