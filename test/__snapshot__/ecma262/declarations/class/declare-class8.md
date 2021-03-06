# Kataw parser test case

## Input

`````js
declare function foo(x: number, y: string): void;
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
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 7,
                "end": 16
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 20
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 30
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 30
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 21,
                        "end": 30
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 33
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 41
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 41
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 31,
                        "end": 41
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 21,
                "end": 41
            },
            "contents": null,
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 138477615,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 48
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 43,
                "end": 48
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 7,
            "end": 48
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 48,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "declare function foo(x: number, y: string): void;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript
declare function foo(x: number, y: string): void;
```

### Diagnostics

```javascript
✔ No errors
```

