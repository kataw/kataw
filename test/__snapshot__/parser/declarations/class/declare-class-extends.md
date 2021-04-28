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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": {
                "kind": 82165,
                "flags": 512,
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
                "flags": 768,
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
                            "flags": 768,
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
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 0,
                    "start": 18,
                    "end": 26
                },
                "expression": {
                    "kind": 134299649,
                    "text": "B",
                    "rawText": "B",
                    "flags": 768,
                    "start": 26,
                    "end": 28
                },
                "typeParameter": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 768,
                                "start": 29,
                                "end": 30
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 29,
                            "end": 30
                        }
                    ],
                    "flags": 0,
                    "start": 28,
                    "end": 31
                },
                "flags": 128,
                "start": 26,
                "end": 31
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 33,
                            "end": 35
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 512,
                                "start": 36,
                                "end": 43
                            },
                            "flags": 0,
                            "start": 35,
                            "end": 43
                        },
                        "initializer": null,
                        "flags": 256,
                        "start": 33,
                        "end": 43
                    }
                ],
                "flags": 256,
                "start": 33,
                "end": 45
            },
            "flags": 128,
            "start": 7,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "declare class A<T> extends B<T> { x: number }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

