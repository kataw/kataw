# Kataw parser test case

## Input

`````js

type q = (this: string) => void;

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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "q",
                "rawText": "q",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 7,
                "end": 9
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "typeParameters": null,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 284,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "this",
                                    "rawText": "this",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 15
                                },
                                "optionalToken": null,
                                "types": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 23
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 23
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 23
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 23
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 27
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 138477615,
                            "flags": 2097216,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 32
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 32
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 32
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 9,
                "end": 32
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "\ntype q = (this: string) => void;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

type q = (this: string ) =>  void 
```

### Diagnostics

```javascript
✔ No errors
```

