# Kataw parser test case

## Input

`````js
var __test = 'ff';

class __Foo {

}

function __Bar() {

}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "var __test = 'ff';\n\nclass __Foo {\n\n}\n\nfunction __Bar() {\n\n}",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "__test",
                            "rawText": "__test",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 3,
                            "end": 10
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261583,
                            "text": "ff",
                            "rawText": "ff",
                            "flags": 33554432,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 17
                        },
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 17
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 17
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "__Foo",
                "rawText": "__Foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 25,
                "end": 31
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 33,
                "end": 36
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 18,
            "end": 36
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "__Bar",
                "rawText": "__Bar",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 46,
                "end": 52
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 53,
                "end": 54
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": true,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 56,
                    "end": 56
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 54,
                "end": 59
            },
            "typeParameters": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 256,
            "start": 36,
            "end": 59
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

