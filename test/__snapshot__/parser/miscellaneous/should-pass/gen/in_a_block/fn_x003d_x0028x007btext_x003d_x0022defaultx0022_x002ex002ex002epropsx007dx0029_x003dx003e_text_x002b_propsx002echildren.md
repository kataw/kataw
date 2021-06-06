# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: fn = ({text = "default", ...props}) => text + props.children
## Input

`````js
{ fn = ({text = "default", ...props}) => text + props.children }
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
                        "kind": 120,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "fn",
                                "rawText": "fn",
                                "flags": 96,
                                "start": 1,
                                "end": 4
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 4,
                                "end": 6
                            },
                            "right": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 37,
                                    "end": 40
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "text",
                                                        "rawText": "text",
                                                        "flags": 96,
                                                        "start": 9,
                                                        "end": 13
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": {
                                                        "kind": 201392131,
                                                        "text": "default",
                                                        "rawText": "\"default\"",
                                                        "flags": 96,
                                                        "start": 15,
                                                        "end": 25
                                                    },
                                                    "flags": 32,
                                                    "start": 9,
                                                    "end": 25
                                                },
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 26,
                                                        "end": 30
                                                    },
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "props",
                                                        "rawText": "props",
                                                        "flags": 96,
                                                        "start": 30,
                                                        "end": 35
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": null,
                                                    "flags": 32,
                                                    "start": 26,
                                                    "end": 35
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 9,
                                            "end": 35
                                        },
                                        "flags": 32,
                                        "start": 8,
                                        "end": 36
                                    }
                                ],
                                "asyncKeyword": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "text",
                                        "rawText": "text",
                                        "flags": 96,
                                        "start": 40,
                                        "end": 45
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 64,
                                        "start": 45,
                                        "end": 47
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "props",
                                            "rawText": "props",
                                            "flags": 96,
                                            "start": 47,
                                            "end": 53
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "children",
                                            "rawText": "children",
                                            "flags": 96,
                                            "start": 54,
                                            "end": 62
                                        },
                                        "flags": 536870944,
                                        "start": 47,
                                        "end": 62
                                    },
                                    "flags": 32,
                                    "start": 40,
                                    "end": 62
                                },
                                "flags": 34,
                                "start": 6,
                                "end": 62
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 62
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 62
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 62
            },
            "flags": 16,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "{ fn = ({text = \"default\", ...props}) => text + props.children }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
}
```

### Printed

```javascript

{
  fn = ({
    text = "\"default\"",
    ...props
  }) =>  text + props.children;
}
```

### Diagnostics

```javascript
✔ No errors
```

