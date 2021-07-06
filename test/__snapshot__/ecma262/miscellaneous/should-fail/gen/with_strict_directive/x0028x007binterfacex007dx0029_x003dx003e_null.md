# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: ({interface}) => null
## Options

`````js
{}
`````
## Input

`````js
"use strict"; ({interface}) => null
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
            "rawText": "\"use strict\"",
            "flags": 96,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "interface",
                                        "rawText": "interface",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 25
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 27
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 30
                },
                "contents": {
                    "kind": 138477575,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 35
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 13,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; ({interface}) => null",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

"\"use strict\"";
({interface}) => null ;
```

### Diagnostics

```javascript
✔ No errors
```

