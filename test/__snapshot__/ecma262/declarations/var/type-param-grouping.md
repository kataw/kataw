# Kataw parser test case

## Input

`````js
var a: Array<(number)>
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 12
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
                                                    "kind": 290,
                                                    "type": {
                                                        "kind": 134234345,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 14,
                                                        "end": 20
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 13,
                                                    "end": 21
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 21
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 21
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 512,
                                    "start": 12,
                                    "end": 22
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 22
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 22
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 22
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "var a: Array<(number)>",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
var a: Array<(number)>;
```

### Diagnostics

```javascript
✔ No errors
```

