# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/var
> :: test: var
> :: case: async function f(){ await foo\n/foo/g }
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { async function f(){ await foo\n/foo/g } });
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 10,
                "end": 14
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 16
                        },
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [],
                                "flags": 32,
                                "transformFlags": 1024,
                                "start": 18,
                                "end": 68
                            },
                            "flags": 18,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 68
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 14,
                        "end": 68
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 68
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 10,
            "end": 68
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "n",
                        "rawText": "n",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 69,
                        "end": 70
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 96,
                        "transformFlags": 32,
                        "start": 70,
                        "end": 71
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 71,
                        "end": 74
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 69,
                    "end": 74
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 74,
                    "end": 75
                },
                "right": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 75,
                    "end": 76
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 69,
                "end": 76
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 69,
            "end": 76
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 81,
            "end": 82
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { async function f(){ await foo\\n/foo/g } });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 82
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 64, end: 68
✖ Invalid hexadecimal escape sequence - start: 68, end: 68
✖ Expected a `;` - start: 68, end: 69
✖ ',' expected - start: 68, end: 69
✖ Declaration or statement expected - start: 76, end: 78
✖ Declaration or statement expected - start: 78, end: 80
✖ Declaration or statement expected - start: 80, end: 81

```

