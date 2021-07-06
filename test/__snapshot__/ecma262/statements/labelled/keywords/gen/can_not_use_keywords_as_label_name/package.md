# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/labelled/keywords/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/labelled/keywords/gen/can_not_use_keywords_as_label_name
> :: test: can not use keywords as label name
> :: case: package
## Options

`````js
{}
`````
## Input

`````js
package: x
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "package",
                "rawText": "package",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 7,
                "end": 8
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 10
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "package: x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

package:  x;
```

### Diagnostics

```javascript
✔ No errors
```

