# Kataw parser test case

## Input

`````js

"use strict"; delete foo;

"use strict"; delete (foo);

"use strict"; delete interface;

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
            "flags": 97,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 21
                },
                "operand": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 25
                },
                "flags": 32,
                "transformFlags": 16384,
                "start": 14,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 14,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 26,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 26,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 48
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 50,
                        "end": 53
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 54
                },
                "flags": 32,
                "transformFlags": 16384,
                "start": 41,
                "end": 54
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 41,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 55,
                "end": 69
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 55,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 70,
                    "end": 77
                },
                "operand": {
                    "kind": 134299649,
                    "text": "interface",
                    "rawText": "interface",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 87
                },
                "flags": 32,
                "transformFlags": 16384,
                "start": 70,
                "end": 87
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 70,
            "end": 88
        }
    ],
    "isModule": false,
    "source": "\n\"use strict\"; delete foo;\n\n\"use strict\"; delete (foo);\n\n\"use strict\"; delete interface;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 89
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'delete' cannot be called on an identifier in strict mode. - start: 25, end: 26
✖ 'delete' cannot be called on an identifier in strict mode. - start: 54, end: 55
✖ 'delete' cannot be called on an identifier in strict mode. - start: 87, end: 88

```

