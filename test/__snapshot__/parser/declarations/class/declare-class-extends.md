# Kataw parser test case

## Input

`````js
declare class A<T> extends B<T> { x: number }
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 7,
                "end": 13
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 13,
                "end": 15
            },
            "typeParameters": {
                "kind": 146,
                "types": [
                    {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 16,
                            "end": 17
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 16,
                        "end": 17
                    }
                ],
                "flags": 0,
                "start": 15,
                "end": 18
            },
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [],
                "flags": 32,
                "start": 7,
                "end": 7
            },
            "flags": 16,
            "start": 7,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 26,
                        "end": 28
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 64,
                        "start": 28,
                        "end": 29
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 29,
                        "end": 30
                    },
                    "flags": 32,
                    "start": 26,
                    "end": 30
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 64,
                    "start": 30,
                    "end": 31
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 33,
                                    "end": 35
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "number",
                                    "rawText": "number",
                                    "flags": 96,
                                    "start": 36,
                                    "end": 43
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 43
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 33,
                        "end": 43
                    },
                    "flags": 48,
                    "start": 31,
                    "end": 45
                },
                "flags": 32,
                "start": 26,
                "end": 45
            },
            "flags": 16,
            "start": 26,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "declare class A<T> extends B<T> { x: number }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 18, end: 26

```

