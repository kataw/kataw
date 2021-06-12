# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/declarations/type/arrow-function-type/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\type\arrow-function-type\gen\in_paren
> :: test: in paren
> :: case: ({key:string | number}) => [c|d]
## Input

`````js
type a = (({key:string | number}) => [c|d]);
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
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 33,
                            "end": 36
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
                                                "start": 12,
                                                "end": 15
                                            },
                                            "value": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "string",
                                                    "rawText": "string",
                                                    "flags": 96,
                                                    "start": 16,
                                                    "end": 22
                                                },
                                                "operatorToken": {
                                                    "kind": 134251592,
                                                    "flags": 64,
                                                    "start": 22,
                                                    "end": 24
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "number",
                                                    "rawText": "number",
                                                    "flags": 96,
                                                    "start": 24,
                                                    "end": 31
                                                },
                                                "flags": 32,
                                                "start": 12,
                                                "end": 31
                                            },
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 12,
                                            "end": 31
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 12,
                                    "end": 31
                                },
                                "flags": 48,
                                "start": 11,
                                "end": 32
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
                                            "start": 38,
                                            "end": 39
                                        },
                                        "operatorToken": {
                                            "kind": 134251592,
                                            "flags": 64,
                                            "start": 39,
                                            "end": 40
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 40,
                                            "end": 41
                                        },
                                        "flags": 32,
                                        "start": 38,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 38,
                                "end": 41
                            },
                            "flags": 32,
                            "start": 36,
                            "end": 42
                        },
                        "flags": 34,
                        "start": 10,
                        "end": 42
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 43
                },
                "flags": 32,
                "start": 4,
                "end": 43
            },
            "flags": 16,
            "start": 4,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "type a = (({key:string | number}) => [c|d]);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 4, end: 6
✖ The left hand side of the arrow is not destructible  - start: 33, end: 36

```

