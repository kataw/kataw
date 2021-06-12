# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/declarations/type/arrow-function-type/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\type\arrow-function-type\gen\stand_alone
> :: test: stand alone
> :: case: ({key:string | number}) => [c|d]
## Input

`````js
type a = ({key:string | number}) => [c|d];
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
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 32,
                        "end": 35
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "key",
                                            "rawText": "key",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 14
                                        },
                                        "value": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "string",
                                                "rawText": "string",
                                                "flags": 96,
                                                "start": 15,
                                                "end": 21
                                            },
                                            "operatorToken": {
                                                "kind": 134251592,
                                                "flags": 64,
                                                "start": 21,
                                                "end": 23
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "number",
                                                "rawText": "number",
                                                "flags": 96,
                                                "start": 23,
                                                "end": 30
                                            },
                                            "flags": 32,
                                            "start": 11,
                                            "end": 30
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 11,
                                        "end": 30
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 11,
                                "end": 30
                            },
                            "flags": 48,
                            "start": 10,
                            "end": 31
                        }
                    ],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
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
                                        "start": 37,
                                        "end": 38
                                    },
                                    "operatorToken": {
                                        "kind": 134251592,
                                        "flags": 64,
                                        "start": 38,
                                        "end": 39
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "start": 39,
                                        "end": 40
                                    },
                                    "flags": 32,
                                    "start": 37,
                                    "end": 40
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 37,
                            "end": 40
                        },
                        "flags": 32,
                        "start": 35,
                        "end": 41
                    },
                    "flags": 34,
                    "start": 8,
                    "end": 41
                },
                "flags": 32,
                "start": 4,
                "end": 41
            },
            "flags": 16,
            "start": 4,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "type a = ({key:string | number}) => [c|d];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 4, end: 6
✖ The left hand side of the arrow is not destructible  - start: 32, end: 35

```

