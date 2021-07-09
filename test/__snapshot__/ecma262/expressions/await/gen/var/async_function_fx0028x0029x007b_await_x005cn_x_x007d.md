# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/var
> :: test: var
> :: case: async function f(){ await \n x; }
## Options

`````js
{}
`````
## Input

`````js
var await; var f = (async function() { async function f(){ await \n x; } });
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
                                "end": 64
                            },
                            "flags": 18,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 64
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 14,
                        "end": 64
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 64
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 10,
            "end": 64
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "transformFlags": 0,
                "start": 66,
                "end": 67
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 66,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 67,
                "end": 69
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 67,
            "end": 70
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 75,
            "end": 76
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { async function f(){ await \\n x; } });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 64, end: 65
✖ Identifier expected - start: 64, end: 66
✖ ',' expected - start: 64, end: 66
✖ Expected a `;` - start: 67, end: 69
✖ Declaration or statement expected - start: 70, end: 72
✖ Declaration or statement expected - start: 72, end: 74
✖ Declaration or statement expected - start: 74, end: 75

```

