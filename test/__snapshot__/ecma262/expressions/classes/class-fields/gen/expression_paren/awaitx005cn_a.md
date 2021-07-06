# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/gen/expression_paren
> :: test: expression_paren
> :: case: await\n a
## Options

`````js
{}
`````
## Input

`````js
(class { await\n a });
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 14
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 8,
                                    "end": 14
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 14
                        },
                        "flags": 6,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 14
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 14
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "transformFlags": 0,
                "start": 15,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 15,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 16,
            "end": 18
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 21,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "(class { await\\n a });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 8, end: 14
✖ Invalid hexadecimal escape sequence - start: 14, end: 14
✖ The parser expected to find a '}' to match the '{' token here - start: 14, end: 15
✖ Expected a `;` - start: 16, end: 18
✖ Declaration or statement expected - start: 18, end: 20
✖ Declaration or statement expected - start: 20, end: 21

```

