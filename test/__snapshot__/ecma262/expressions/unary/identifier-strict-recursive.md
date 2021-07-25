# Kataw parser test case

## Input

`````js
"use strict";

delete ((this.#field))
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
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 21
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 121,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 4276321,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 28
                            },
                            "expression": {
                                "kind": 67191035,
                                "text": "#field",
                                "rawText": "#field",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 35
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 23,
                            "end": 35
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 36
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 37
                },
                "flags": 32,
                "transformFlags": 16384,
                "start": 13,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "\"use strict\";\n\ndelete ((this.#field))",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class bodies - start: 29, end: 35

```

