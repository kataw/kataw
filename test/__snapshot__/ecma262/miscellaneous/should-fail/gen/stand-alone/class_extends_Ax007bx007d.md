# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: class extends A{}
## Options

`````js
{}
`````
## Input

`````js
class extends A{}
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
            "name": null,
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 13
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "A",
                        "rawText": "A",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 15
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 15
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 16
                },
                "flags": 5,
                "transformFlags": 0,
                "start": 32,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "class extends A{}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
class extends A {}
```

### Diagnostics

```javascript
✔ No errors
```

