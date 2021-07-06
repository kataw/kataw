# Kataw parser test case

## Input

`````js

declare function foo (this : number, a : string, b) : void

declare function bar (this : number): void

declare function baz (this : number, ...a : any): void

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
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 8,
                "end": 17
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 17,
                "end": 21
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
                            "text": "this",
                            "rawText": "this",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 27
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
                                "start": 29,
                                "end": 36
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 36
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 36
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 39
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
                                "start": 41,
                                "end": 48
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 48
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 48
                    },
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 49,
                        "end": 51
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 23,
                "end": 51
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
                    "start": 54,
                    "end": 59
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 54,
                "end": 59
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 8,
            "end": 59
        },
        {
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 59,
                "end": 68
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 68,
                "end": 77
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "transformFlags": 0,
                "start": 77,
                "end": 81
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
                            "text": "this",
                            "rawText": "this",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 83,
                            "end": 87
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
                                "start": 89,
                                "end": 96
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 89,
                            "end": 96
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 83,
                        "end": 96
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 83,
                "end": 96
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
                    "start": 98,
                    "end": 103
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 98,
                "end": 103
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 68,
            "end": 103
        },
        {
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 103,
                "end": 112
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 112,
                "end": 121
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "baz",
                "rawText": "baz",
                "flags": 96,
                "transformFlags": 0,
                "start": 121,
                "end": 125
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
                            "text": "this",
                            "rawText": "this",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 127,
                            "end": 131
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
                                "start": 133,
                                "end": 140
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 133,
                            "end": 140
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 127,
                        "end": 140
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 141,
                            "end": 145
                        },
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 145,
                            "end": 146
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234252,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 148,
                                "end": 152
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 148,
                            "end": 152
                        },
                        "right": null,
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 141,
                        "end": 152
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 127,
                "end": 152
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
                    "start": 154,
                    "end": 159
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 154,
                "end": 159
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 112,
            "end": 159
        }
    ],
    "isModule": false,
    "source": "\ndeclare function foo (this : number, a : string, b) : void\n\ndeclare function bar (this : number): void\n\ndeclare function baz (this : number, ...a : any): void\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 160
}
```

### Printed

```javascript

declare function foo(this: number, a: string, b): void
declare function bar(this: number): void

declare function baz(this: number, ...a: any): void

```

### Diagnostics

```javascript
✔ No errors
```

