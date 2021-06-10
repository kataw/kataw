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
                "flags": 80,
                "start": 0,
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
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 16,
                            "end": 17
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 0,
                        "start": 16,
                        "end": 17
                    }
                ],
                "flags": 0,
                "start": 15,
                "end": 18
            },
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 18,
                        "end": 26
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "start": 26,
                        "end": 28
                    },
                    "typeParameter": {
                        "kind": 266,
                        "parameters": [
                            {
                                "kind": 267,
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 29,
                                        "end": 30
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 29,
                                    "end": 30
                                },
                                "flags": 0,
                                "start": 29,
                                "end": 30
                            }
                        ],
                        "flags": 0,
                        "start": 28,
                        "end": 31
                    },
                    "flags": 16,
                    "start": 26,
                    "end": 31
                },
                "body": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 33,
                                "end": 35
                            },
                            "value": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 36,
                                "end": 43
                            },
                            "optionalToken": null,
                            "staticToken": null,
                            "flags": 0,
                            "start": 33,
                            "end": 43
                        }
                    ],
                    "flags": 0,
                    "start": 31,
                    "end": 45
                },
                "flags": 4128,
                "start": 18,
                "end": 45
            },
            "flags": 16,
            "start": 0,
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

declare class A  TODO!
```

### Diagnostics

```javascript
✔ No errors
```

