# Kataw parser test case

## Input

`````js
class Foo {set fooProp(value:number):void{}}
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 9
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 14
                            },
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "fooProp",
                                    "rawText": "fooProp",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 22
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
                                                "text": "value",
                                                "rawText": "value",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 28
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
                                                    "end": 35
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 35
                                            },
                                            "right": null,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 35
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 36
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 138477615,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 41
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 41
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 42,
                                        "end": 42
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 41,
                                    "end": 43
                                },
                                "flags": 512,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 43
                            },
                            "flags": 512,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 43
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 43
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "class Foo {set fooProp(value:number):void{}}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

class Foo {
  set fooProp(value: number): void {}
}
```

### Diagnostics

```javascript
✔ No errors
```

