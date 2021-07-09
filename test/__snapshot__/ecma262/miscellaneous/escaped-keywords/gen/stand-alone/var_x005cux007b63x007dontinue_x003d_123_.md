# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/escaped-keywords/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/escaped-keywords/gen/stand-alone
> :: test: stand-alone
> :: case: var \u{63}ontinue = 123;
## Options

`````js
{}
`````
## Input

`````js
var \u{63}ontinue = 123;
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
                "declarations": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 3
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 3
        },
        {
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 8272,
                "transformFlags": 0,
                "start": 3,
                "end": 17
            },
            "label": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 17,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 3,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 123,
                "rawText": "123",
                "flags": 96,
                "transformFlags": 0,
                "start": 19,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 19,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "var \\u{63}ontinue = 123;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 3, end: 17
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 3, end: 17
✖ Keywords cannot contain escape characters - start: 3, end: 17
✖ Identifier expected - start: 17, end: 19
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 3, end: 19

```

