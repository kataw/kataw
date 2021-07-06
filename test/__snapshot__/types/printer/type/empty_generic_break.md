  # Kataw parser test case

## Input

`````js
class X {
	a: B<> = SuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong;
}
`````

## Options

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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 12
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "B",
                                        "rawText": "B",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "typeParameters": {
                                        "kind": 310,
                                        "typeInstantiations": {
                                            "kind": 309,
                                            "types": [],
                                            "trailingComma": false,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 16
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 512,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 17
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 17
                            },
                            "initializer": {
                                "kind": 134299649,
                                "text": "SuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong",
                                "rawText": "SuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 89
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 89
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 89,
                            "end": 90
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 90
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 92
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 92
        }
    ],
    "isModule": false,
    "source": "class X {\n\ta: B<> = SuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 92
}
```

### Printed

```javascript
class X {
  a: B<> = SuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperLong;;
}
```

### Diagnostics

```javascript
✔ No errors
```

