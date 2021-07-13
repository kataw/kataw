# Kataw parser test case

## Input

`````js
Math.min(
  (
    /* $FlowFixMe(>=0.38.0 site=www) - Flow error detected during the
     * deployment of v0.38.0. To see the error, remove this comment and
     * run flow */
    document.body.scrollHeight -
    (window.scrollY + window.innerHeight)
  ) - devsite_footer_height,
  0,
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
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "Math",
                        "rawText": "Math",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 4
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "min",
                        "rawText": "min",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "flags": 96,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 8
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "document",
                                                "rawText": "document",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 187
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "body",
                                                "rawText": "body",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 188,
                                                "end": 192
                                            },
                                            "flags": 97,
                                            "transformFlags": 2,
                                            "start": 9,
                                            "end": 192
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "scrollHeight",
                                            "rawText": "scrollHeight",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 193,
                                            "end": 205
                                        },
                                        "flags": 97,
                                        "transformFlags": 2,
                                        "start": 9,
                                        "end": 205
                                    },
                                    "operatorToken": {
                                        "kind": 134318643,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 205,
                                        "end": 207
                                    },
                                    "right": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "window",
                                                    "rawText": "window",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 213,
                                                    "end": 219
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "scrollY",
                                                    "rawText": "scrollY",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 220,
                                                    "end": 227
                                                },
                                                "flags": 96,
                                                "transformFlags": 2,
                                                "start": 207,
                                                "end": 227
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 227,
                                                "end": 229
                                            },
                                            "right": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "window",
                                                    "rawText": "window",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 229,
                                                    "end": 236
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "innerHeight",
                                                    "rawText": "innerHeight",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 237,
                                                    "end": 248
                                                },
                                                "flags": 96,
                                                "transformFlags": 2,
                                                "start": 229,
                                                "end": 248
                                            },
                                            "flags": 96,
                                            "transformFlags": 5120,
                                            "start": 207,
                                            "end": 248
                                        },
                                        "flags": 207,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 249
                                    },
                                    "flags": 97,
                                    "transformFlags": 5120,
                                    "start": 9,
                                    "end": 249
                                },
                                "flags": 9,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 253
                            },
                            "operatorToken": {
                                "kind": 134318643,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 253,
                                "end": 255
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "devsite_footer_height",
                                "rawText": "devsite_footer_height",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 255,
                                "end": 277
                            },
                            "flags": 41,
                            "transformFlags": 5120,
                            "start": 9,
                            "end": 277
                        },
                        {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 278,
                            "end": 282
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 283
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 285
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 285
        }
    ],
    "isModule": false,
    "source": "Math.min(\n  (\n    /* $FlowFixMe(>=0.38.0 site=www) - Flow error detected during the\n     * deployment of v0.38.0. To see the error, remove this comment and\n     * run flow */\n    document.body.scrollHeight -\n    (window.scrollY + window.innerHeight)\n  ) - devsite_footer_height,\n  0,\n)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 285
}
```

### Printed

```javascript
Math.min(

    (
      /* $FlowFixMe(>=0.38.0 site=www) - Flow error detected during the
     * deployment of v0.38.0. To see the error, remove this comment and
     * run flow */
      document.body.scrollHeight -
      (window.scrollY + window.innerHeight)
    ) - devsite_footer_height
  ,
  0,
);
```

### Diagnostics

```javascript
✔ No errors
```

