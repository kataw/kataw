# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/declarations/type/arrow-function-type/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\type\arrow-function-type\gen\double_paren
> :: test: double paren
> :: case: ({key?:string | number}) => [c|d]
## Input

`````js
type a = ((({key?:string | number}) => [c|d]));
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
                "kind": 134299649,
                "text": "type",
                "rawText": "type",
                "flags": 96,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 4,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [],
                                "flags": 32,
                                "start": 11,
                                "end": 17
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 17
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 17
                },
                "flags": 32,
                "start": 4,
                "end": 17
            },
            "flags": 16,
            "start": 4,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "string",
                    "rawText": "string",
                    "flags": 96,
                    "start": 18,
                    "end": 24
                },
                "operatorToken": {
                    "kind": 134251592,
                    "flags": 64,
                    "start": 24,
                    "end": 26
                },
                "right": {
                    "kind": 134299649,
                    "text": "number",
                    "rawText": "number",
                    "flags": 96,
                    "start": 26,
                    "end": 33
                },
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 40,
                                "end": 41
                            },
                            "operatorToken": {
                                "kind": 134251592,
                                "flags": 64,
                                "start": 41,
                                "end": 42
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 42,
                                "end": 43
                            },
                            "flags": 32,
                            "start": 40,
                            "end": 43
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 40,
                    "end": 43
                },
                "flags": 32,
                "start": 38,
                "end": 44
            },
            "flags": 16,
            "start": 38,
            "end": 44
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 46,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "type a = ((({key?:string | number}) => [c|d]));",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 4, end: 6
✖ Property definition expected. Did you mean to use a ':'? - start: 16, end: 17
✖ ',' expected - start: 16, end: 17
✖ Expected a ')' to match the '(' token here - start: 17, end: 18
✖ Declaration or statement expected - start: 33, end: 34
✖ Declaration or statement expected - start: 34, end: 35
✖ Declaration or statement expected - start: 35, end: 38
✖ Expected a `;` - start: 44, end: 45
✖ Declaration or statement expected - start: 45, end: 46

```

