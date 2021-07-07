# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: (function call(foo=await){})
## Options

`````js
{}
`````
## Input

`````js
'use strict'; (function call(foo=await){})
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 23
                    },
                    "asteriskToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "call",
                        "rawText": "call",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 28
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
                                    "start": 29,
                                    "end": 32
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 38
                                },
                                "flags": 34,
                                "transformFlags": 4096,
                                "start": 29,
                                "end": 38
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 38
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 40
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 41
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 41
                },
                "flags": 13,
                "transformFlags": 0,
                "start": 32,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "'use strict'; (function call(foo=await){})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

"'use strict'";
(function call(foo = await) {});
```

### Diagnostics

```javascript
✔ No errors
```

