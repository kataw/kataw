# Kataw parser test case

## Input

`````js
'use strict'; eval++;

'use strict'; eval = 0;

'use strict'; eval += 0;

'use strict'; arguments++;
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
            "rawText": "'use strict'",
            "flags": 4194400,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 20
                },
                "operand": {
                    "kind": 134299649,
                    "text": "eval",
                    "rawText": "eval",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 18
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "transformFlags": 0,
                "start": 21,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 21,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "eval",
                    "rawText": "eval",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 41
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 43
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 45
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 36,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 36,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "transformFlags": 0,
                "start": 46,
                "end": 60
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 46,
            "end": 61
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "eval",
                    "rawText": "eval",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 61,
                    "end": 66
                },
                "operatorToken": {
                    "kind": 4130,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 66,
                    "end": 69
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 69,
                    "end": 71
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 61,
                "end": 71
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 61,
            "end": 72
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "transformFlags": 0,
                "start": 72,
                "end": 86
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 72,
            "end": 87
        },
        {
            "kind": 120,
            "expression": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 97,
                    "end": 99
                },
                "operand": {
                    "kind": 134299649,
                    "text": "arguments",
                    "rawText": "arguments",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 87,
                    "end": 97
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 87,
                "end": 99
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 87,
            "end": 100
        }
    ],
    "isModule": false,
    "source": "'use strict'; eval++;\n\n'use strict'; eval = 0;\n\n'use strict'; eval += 0;\n\n'use strict'; arguments++;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 100
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 18, end: 20
✖ Cannot assign to 'eval' and 'arguments' because they are not a variable - start: 41, end: 43
✖ Cannot assign to 'eval' and 'arguments' because they are not a variable - start: 66, end: 69
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 97, end: 99

```

