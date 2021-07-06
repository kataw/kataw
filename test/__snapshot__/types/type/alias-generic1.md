# Kataw parser test case

## Input

`````js
type MyObject<A, B, C> = {
  property: A,
  method(val: B): C,
};
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
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "MyObject",
                "rawText": "MyObject",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 13
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
                                "text": "A",
                                "rawText": "A",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 15
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 15
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 18
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 18
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 21
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 21
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 21
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 13,
                "end": 22
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 22,
                "end": 24
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "property",
                                "rawText": "property",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 37
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
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 40
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 40
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 40
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 41
                        },
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "method",
                                "rawText": "method",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 50
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "val",
                                                "rawText": "val",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 51,
                                                "end": 54
                                            },
                                            "optionalToken": null,
                                            "types": {
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
                                                        "start": 55,
                                                        "end": 57
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 55,
                                                    "end": 57
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 55,
                                                "end": 57
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 51,
                                            "end": 57
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 57
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "C",
                                            "rawText": "C",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 59,
                                            "end": 61
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 59,
                                        "end": 61
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 59,
                                    "end": 61
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 61
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 62
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 64
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 24,
                "end": 64
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 65
        }
    ],
    "isModule": false,
    "source": "type MyObject<A, B, C> = {\n  property: A,\n  method(val: B): C,\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 65
}
```

### Printed

```javascript

type MyObject<A,
B,
C> = { property: A, method(val: B): C }
```

### Diagnostics

```javascript
✔ No errors
```

