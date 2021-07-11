# Kataw parser test case

## Input

`````js
import(/* Hello */ 'something')

import('something' /* Hello */)

import(/* Hello */ 'something' /* Hello */)

import('something' /* Hello */ + 'else')

import(
  /* Hello */
  'something'
  /* Hello */
)

wrap(
  import(/* Hello */
    'something'
  )
)
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
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 80,
                    "start": 0,
                    "end": 6
                },
                "expression": {
                    "kind": 201392131,
                    "text": "something",
                    "rawText": "'something'",
                    "flags": 4194400,
                    "start": 7,
                    "end": 30
                },
                "flags": 32,
                "start": 6,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 81,
                    "start": 31,
                    "end": 39
                },
                "expression": {
                    "kind": 201392131,
                    "text": "something",
                    "rawText": "'something'",
                    "flags": 4194400,
                    "start": 40,
                    "end": 51
                },
                "flags": 32,
                "start": 39,
                "end": 64
            },
            "flags": 16,
            "start": 31,
            "end": 64
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 81,
                    "start": 64,
                    "end": 72
                },
                "expression": {
                    "kind": 201392131,
                    "text": "something",
                    "rawText": "'something'",
                    "flags": 4194400,
                    "start": 73,
                    "end": 96
                },
                "flags": 32,
                "start": 72,
                "end": 109
            },
            "flags": 16,
            "start": 64,
            "end": 109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 81,
                    "start": 109,
                    "end": 117
                },
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 201392131,
                        "text": "something",
                        "rawText": "'something'",
                        "flags": 4194400,
                        "start": 118,
                        "end": 129
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "start": 129,
                        "end": 143
                    },
                    "right": {
                        "kind": 201392131,
                        "text": "else",
                        "rawText": "'else'",
                        "flags": 4194400,
                        "start": 143,
                        "end": 150
                    },
                    "flags": 4194400,
                    "start": 118,
                    "end": 150
                },
                "flags": 32,
                "start": 117,
                "end": 151
            },
            "flags": 16,
            "start": 109,
            "end": 151
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 81,
                    "start": 151,
                    "end": 159
                },
                "expression": {
                    "kind": 201392131,
                    "text": "something",
                    "rawText": "'something'",
                    "flags": 4194401,
                    "start": 160,
                    "end": 188
                },
                "flags": 32,
                "start": 159,
                "end": 204
            },
            "flags": 16,
            "start": 151,
            "end": 204
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 97,
                    "start": 204,
                    "end": 210
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 206,
                            "importKeyword": {
                                "kind": 37814364,
                                "flags": 65,
                                "start": 211,
                                "end": 220
                            },
                            "expression": {
                                "kind": 201392131,
                                "text": "something",
                                "rawText": "'something'",
                                "flags": 4194401,
                                "start": 221,
                                "end": 248
                            },
                            "flags": 32,
                            "start": 220,
                            "end": 252
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 211,
                    "end": 252
                },
                "flags": 268435488,
                "start": 204,
                "end": 254
            },
            "flags": 16,
            "start": 204,
            "end": 254
        }
    ],
    "isModule": false,
    "source": "import(/* Hello */ 'something')\n\nimport('something' /* Hello */)\n\nimport(/* Hello */ 'something' /* Hello */)\n\nimport('something' /* Hello */ + 'else')\n\nimport(\n  /* Hello */\n  'something'\n  /* Hello */\n)\n\nwrap(\n  import(/* Hello */\n    'something'\n  )\n)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 254
}
```

### Printed

```javascript

import(/* Hello */"'something'");
import("'something'" /* Hello */);
import(/* Hello */"'something'" /* Hello */);
import("'something'" /* Hello */ + "'else'");
import(
 /* Hello */
"'something'"
 /* Hello */
);
wrap(import(/* Hello */"'something'"));

```

### Diagnostics

```javascript
✔ No errors
```

