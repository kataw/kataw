# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/simple
> :: test: simple
> :: case: let x = function *f(foo = await){}
## Options

`````js
{}
`````
## Input

`````js
let x = function *f(foo = await){}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 16
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 18
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 19
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
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 23
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 31
                                        },
                                        "flags": 34,
                                        "transformFlags": 4096,
                                        "start": 20,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 31
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 33
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 34
                            },
                            "returnType": null,
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 34
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 34
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 34
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "let x = function *f(foo = await){}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
let x = function *f(foo = await) {};
```

### Diagnostics

```javascript
✔ No errors
```

