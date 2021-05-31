# Kataw parser test case

## Input

`````js
import type { foo as bar2 } from "baz";
import type from "foo";
import type2, { foo26 } from "bar";
import type foo24 from "bar";
import type { foo25, bar1 } from "baz";
import typeof * as namespace from "bar";
import { type Foo12 } from "bar";
`````

## Options

### Parser Options

`````js
{ allowTypes : true, module: true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 80,
                    "start": 27,
                    "end": 32
                },
                "from": {
                    "kind": 201392131,
                    "text": "baz",
                    "rawText": "\"baz\"",
                    "flags": 96,
                    "start": 32,
                    "end": 38
                },
                "flags": 0,
                "start": 27,
                "end": 38
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "type",
                    "rawText": "type",
                    "flags": 96,
                    "start": 6,
                    "end": 11
                },
                "nameSpaceImport": null,
                "namedImports": {
                    "kind": 267,
                    "importsList": {
                        "kind": 265,
                        "specifiers": [
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 17
                                },
                                "asKeyword": {
                                    "kind": 16494,
                                    "flags": 80,
                                    "start": 17,
                                    "end": 20
                                },
                                "binding": {
                                    "kind": 134299649,
                                    "text": "bar2",
                                    "rawText": "bar2",
                                    "flags": 96,
                                    "start": 20,
                                    "end": 25
                                },
                                "flags": 16,
                                "start": 13,
                                "end": 25
                            }
                        ],
                        "flags": 0,
                        "start": 13,
                        "end": 25
                    },
                    "flags": 16,
                    "start": 11,
                    "end": 27
                },
                "flags": 16,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 39
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "start": 39,
                "end": 46
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 80,
                    "start": 51,
                    "end": 56
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "\"foo\"",
                    "flags": 96,
                    "start": 56,
                    "end": 62
                },
                "flags": 0,
                "start": 51,
                "end": 62
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "type",
                    "rawText": "type",
                    "flags": 96,
                    "start": 46,
                    "end": 51
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "start": 39,
                "end": 51
            },
            "flags": 16,
            "start": 39,
            "end": 63
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "start": 63,
                "end": 70
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 80,
                    "start": 87,
                    "end": 92
                },
                "from": {
                    "kind": 201392131,
                    "text": "bar",
                    "rawText": "\"bar\"",
                    "flags": 96,
                    "start": 92,
                    "end": 98
                },
                "flags": 0,
                "start": 87,
                "end": 98
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "type2",
                    "rawText": "type2",
                    "flags": 96,
                    "start": 70,
                    "end": 76
                },
                "nameSpaceImport": null,
                "namedImports": {
                    "kind": 267,
                    "importsList": {
                        "kind": 265,
                        "specifiers": [
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "foo26",
                                    "rawText": "foo26",
                                    "flags": 96,
                                    "start": 79,
                                    "end": 85
                                },
                                "flags": 16,
                                "start": 79,
                                "end": 85
                            }
                        ],
                        "flags": 0,
                        "start": 79,
                        "end": 85
                    },
                    "flags": 16,
                    "start": 77,
                    "end": 87
                },
                "flags": 16,
                "start": 63,
                "end": 87
            },
            "flags": 16,
            "start": 63,
            "end": 99
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "start": 99,
                "end": 106
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": null,
                "from": {
                    "kind": 134299649,
                    "text": "foo24",
                    "rawText": "foo24",
                    "flags": 96,
                    "start": 111,
                    "end": 117
                },
                "flags": 0,
                "start": 111,
                "end": 117
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "type",
                    "rawText": "type",
                    "flags": 96,
                    "start": 106,
                    "end": 111
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "start": 99,
                "end": 111
            },
            "flags": 16,
            "start": 99,
            "end": 117
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "start": 117,
                "end": 122
            },
            "flags": 16,
            "start": 117,
            "end": 122
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "bar",
                "rawText": "\"bar\"",
                "flags": 96,
                "start": 122,
                "end": 128
            },
            "flags": 16,
            "start": 122,
            "end": 129
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "start": 129,
                "end": 136
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 80,
                    "start": 157,
                    "end": 162
                },
                "from": {
                    "kind": 201392131,
                    "text": "baz",
                    "rawText": "\"baz\"",
                    "flags": 96,
                    "start": 162,
                    "end": 168
                },
                "flags": 0,
                "start": 157,
                "end": 168
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "type",
                    "rawText": "type",
                    "flags": 96,
                    "start": 136,
                    "end": 141
                },
                "nameSpaceImport": null,
                "namedImports": {
                    "kind": 267,
                    "importsList": {
                        "kind": 265,
                        "specifiers": [
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "foo25",
                                    "rawText": "foo25",
                                    "flags": 96,
                                    "start": 143,
                                    "end": 149
                                },
                                "flags": 16,
                                "start": 143,
                                "end": 149
                            },
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "bar1",
                                    "rawText": "bar1",
                                    "flags": 96,
                                    "start": 150,
                                    "end": 155
                                },
                                "flags": 16,
                                "start": 150,
                                "end": 155
                            }
                        ],
                        "flags": 0,
                        "start": 143,
                        "end": 155
                    },
                    "flags": 16,
                    "start": 141,
                    "end": 157
                },
                "flags": 16,
                "start": 129,
                "end": 157
            },
            "flags": 16,
            "start": 129,
            "end": 169
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "start": 169,
                "end": 176
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 16,
            "start": 169,
            "end": 176
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 138477613,
                        "flags": 64,
                        "start": 176,
                        "end": 183
                    },
                    "operand": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 183,
                        "end": 183
                    },
                    "flags": 32,
                    "start": 176,
                    "end": 183
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 183,
                    "end": 185
                },
                "right": {
                    "kind": 134299649,
                    "text": "as",
                    "rawText": "as",
                    "flags": 96,
                    "start": 185,
                    "end": 188
                },
                "flags": 32,
                "start": 176,
                "end": 188
            },
            "flags": 16,
            "start": 176,
            "end": 188
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "namespace",
                "rawText": "namespace",
                "flags": 96,
                "start": 188,
                "end": 198
            },
            "flags": 16,
            "start": 188,
            "end": 198
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "start": 198,
                "end": 203
            },
            "flags": 16,
            "start": 198,
            "end": 203
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "bar",
                "rawText": "\"bar\"",
                "flags": 96,
                "start": 203,
                "end": 209
            },
            "flags": 16,
            "start": 203,
            "end": 210
        },
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 81,
                "start": 210,
                "end": 217
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 80,
                    "start": 232,
                    "end": 237
                },
                "from": {
                    "kind": 201392131,
                    "text": "bar",
                    "rawText": "\"bar\"",
                    "flags": 96,
                    "start": 237,
                    "end": 243
                },
                "flags": 0,
                "start": 232,
                "end": 243
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": null,
                "nameSpaceImport": null,
                "namedImports": {
                    "kind": 267,
                    "importsList": {
                        "kind": 265,
                        "specifiers": [
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "type",
                                    "rawText": "type",
                                    "flags": 96,
                                    "start": 219,
                                    "end": 224
                                },
                                "flags": 16,
                                "start": 219,
                                "end": 224
                            },
                            {
                                "kind": 264,
                                "moduleExportName": null,
                                "name": null,
                                "asKeyword": null,
                                "binding": {
                                    "kind": 134299649,
                                    "text": "Foo12",
                                    "rawText": "Foo12",
                                    "flags": 96,
                                    "start": 224,
                                    "end": 230
                                },
                                "flags": 16,
                                "start": 224,
                                "end": 230
                            }
                        ],
                        "flags": 0,
                        "start": 219,
                        "end": 230
                    },
                    "flags": 16,
                    "start": 217,
                    "end": 232
                },
                "flags": 16,
                "start": 210,
                "end": 232
            },
            "flags": 16,
            "start": 210,
            "end": 244
        }
    ],
    "isModule": true,
    "source": "import type { foo as bar2 } from \"baz\";\nimport type from \"foo\";\nimport type2, { foo26 } from \"bar\";\nimport type foo24 from \"bar\";\nimport type { foo25, bar1 } from \"baz\";\nimport typeof * as namespace from \"bar\";\nimport { type Foo12 } from \"bar\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 244
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 117, end: 122
✖ Expected a `;` - start: 122, end: 128
✖ Declaration or statement expected - start: 176, end: 183
✖ Expected a `;` - start: 176, end: 183
✖ Identifier expected - start: 183, end: 185
✖ Expected a `;` - start: 188, end: 198
✖ Expected a `;` - start: 198, end: 203
✖ Expected a `;` - start: 203, end: 209
✖ ',' expected - start: 224, end: 230

```

