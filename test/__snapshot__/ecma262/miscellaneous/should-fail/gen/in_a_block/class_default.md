# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: class default
## Options

`````js
{}
`````
## Input

`````js
{ class default }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 7
                        },
                        "name": null,
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": null,
                            "body": {
                                "kind": 303,
                                "elements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 7
                            },
                            "flags": 7,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 7
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 7
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "{ class default }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening brace - '{ - start: 8, end: 15
✖ Declaration or statement expected - start: 15, end: 17

```

