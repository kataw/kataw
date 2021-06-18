# Kataw parser test case

## Input

`````js
type Foo<T> = Bar<T>
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 9,
                                "end": 10
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 9,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 9,
                    "end": 10
                },
                "flags": 2097152,
                "start": 8,
                "end": 11
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 11,
                "end": 13
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "name": {
                        "kind": 134299649,
                        "text": "Bar",
                        "rawText": "Bar",
                        "flags": 96,
                        "start": 13,
                        "end": 17
                    },
                    "typeParameters": {
                        "kind": 310,
                        "typeInstantiations": {
                            "kind": 309,
                            "types": [
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 18,
                                        "end": 19
                                    },
                                    "flags": 2097152,
                                    "start": 18,
                                    "end": 19
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 18,
                            "end": 19
                        },
                        "flags": 2097152,
                        "start": 17,
                        "end": 20
                    },
                    "flags": 2097152,
                    "start": 13,
                    "end": 20
                },
                "flags": 2097152,
                "start": 13,
                "end": 20
            },
            "flags": 2097152,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "type Foo<T> = Bar<T>",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

