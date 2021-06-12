# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/declarations/type/arrow-function-type/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\type\arrow-function-type\gen\mix
> :: test: mix
> :: case: ({key?:string | number}) => [c|d]
## Input

`````js
type a = [({key?:string | number}) => [c|d]][({key?:string | number}) => [c|d]];
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "expressions": [],
                                    "flags": 32,
                                    "start": 10,
                                    "end": 16
                                },
                                "flags": 32,
                                "start": 10,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 10,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 16
                },
                "flags": 32,
                "start": 4,
                "end": 16
            },
            "flags": 16,
            "start": 4,
            "end": 16
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
                    "start": 17,
                    "end": 23
                },
                "operatorToken": {
                    "kind": 134251592,
                    "flags": 64,
                    "start": 23,
                    "end": 25
                },
                "right": {
                    "kind": 134299649,
                    "text": "number",
                    "rawText": "number",
                    "flags": 96,
                    "start": 25,
                    "end": 32
                },
                "flags": 32,
                "start": 17,
                "end": 32
            },
            "flags": 16,
            "start": 17,
            "end": 32
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
                                "start": 39,
                                "end": 40
                            },
                            "operatorToken": {
                                "kind": 134251592,
                                "flags": 64,
                                "start": 40,
                                "end": 41
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 41,
                                "end": 42
                            },
                            "flags": 32,
                            "start": 39,
                            "end": 42
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 39,
                    "end": 42
                },
                "flags": 32,
                "start": 37,
                "end": 43
            },
            "flags": 16,
            "start": 37,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [],
                                "flags": 32,
                                "start": 45,
                                "end": 51
                            },
                            "flags": 32,
                            "start": 45,
                            "end": 51
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 45,
                    "end": 51
                },
                "flags": 32,
                "start": 44,
                "end": 51
            },
            "flags": 16,
            "start": 44,
            "end": 51
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
                    "start": 52,
                    "end": 58
                },
                "operatorToken": {
                    "kind": 134251592,
                    "flags": 64,
                    "start": 58,
                    "end": 60
                },
                "right": {
                    "kind": 134299649,
                    "text": "number",
                    "rawText": "number",
                    "flags": 96,
                    "start": 60,
                    "end": 67
                },
                "flags": 32,
                "start": 52,
                "end": 67
            },
            "flags": 16,
            "start": 52,
            "end": 67
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
                                "start": 74,
                                "end": 75
                            },
                            "operatorToken": {
                                "kind": 134251592,
                                "flags": 64,
                                "start": 75,
                                "end": 76
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 76,
                                "end": 77
                            },
                            "flags": 32,
                            "start": 74,
                            "end": 77
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 74,
                    "end": 77
                },
                "flags": 32,
                "start": 72,
                "end": 78
            },
            "flags": 16,
            "start": 72,
            "end": 78
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 79,
            "end": 80
        }
    ],
    "isModule": false,
    "source": "type a = [({key?:string | number}) => [c|d]][({key?:string | number}) => [c|d]];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 80
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 4, end: 6
✖ Property definition expected. Did you mean to use a ':'? - start: 15, end: 16
✖ ',' expected - start: 15, end: 16
✖ Expected a ')' to match the '(' token here - start: 16, end: 17
✖ Declaration or statement expected - start: 32, end: 33
✖ Declaration or statement expected - start: 33, end: 34
✖ Declaration or statement expected - start: 34, end: 37
✖ Expected a `;` - start: 43, end: 44
✖ Property definition expected. Did you mean to use a ':'? - start: 50, end: 51
✖ ',' expected - start: 50, end: 51
✖ Expected a ')' to match the '(' token here - start: 51, end: 52
✖ Declaration or statement expected - start: 67, end: 68
✖ Declaration or statement expected - start: 68, end: 69
✖ Declaration or statement expected - start: 69, end: 72
✖ Expected a `;` - start: 78, end: 79

```

