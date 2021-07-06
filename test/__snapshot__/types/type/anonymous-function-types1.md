# Kataw parser test case

## Input

`````js
declare function foo(x: number, string): void;
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
                        "transformFlags": 0,
                        "start": 21,
                        "end": 30
                    },
                    {
                        "kind": 134299649,
                        "text": "string",
                        "rawText": "string",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 38
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 21,
                "end": 38
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
                    "start": 40,
                    "end": 45
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 40,
                "end": 45
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 7,
            "end": 45
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 45,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "declare function foo(x: number, string): void;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

declare function foo(x: number, string): void 
```

### Diagnostics

```javascript
✔ No errors
```

