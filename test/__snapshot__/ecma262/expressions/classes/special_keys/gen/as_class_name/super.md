# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/special_keys/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/special_keys/gen/as_class_name
> :: test: as class name
> :: case: super
## Options

`````js
{}
`````
## Input

`````js
class super {}
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
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 5
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 5
                },
                "flags": 5,
                "transformFlags": 0,
                "start": 32,
                "end": 5
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 4259935,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 11
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 11
                },
                "flags": 32,
                "transformFlags": 2,
                "start": 5,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 5,
            "end": 11
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 13,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 11,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "class super {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 5, end: 11
✖ 'super' must be followed by an argument list or member access. - start: 5, end: 13
✖ Dot property must be an identifier - start: 11, end: 13
✖ Expected a `;` - start: 11, end: 13

```

