# Kataw parser test case

## Input

`````js
class Foo<T> extends Bar<T> { }
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
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 5,
                "end": 9
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
                                "start": 10,
                                "end": 11
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 10,
                            "end": 11
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 10,
                    "end": 11
                },
                "flags": 2097152,
                "start": 9,
                "end": 12
            },
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 12,
                        "end": 20
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "Bar",
                        "rawText": "Bar",
                        "flags": 96,
                        "start": 20,
                        "end": 24
                    },
                    "typeParameter": {
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
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 26
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 25,
                                        "end": 26
                                    },
                                    "flags": 2097152,
                                    "start": 25,
                                    "end": 26
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 25,
                            "end": 26
                        },
                        "flags": 2097152,
                        "start": 24,
                        "end": 27
                    },
                    "flags": 16,
                    "start": 20,
                    "end": 27
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 29,
                    "end": 29
                },
                "flags": 12,
                "start": 32,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "class Foo<T> extends Bar<T> { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

class Foo<T>  extends Bar<T> {}
```

### Diagnostics

```javascript
✔ No errors
```

