# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
class Columns extends React.Component {
        render() {
          return (
            <>
              <td>Hello</td>
              <td>World</td>
            </>
      );
  }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class Columns extends React.Component {\n        render() {\n          return (\n            <>\n              <td>Hello</td>\n              <td>World</td>\n            </>\n      );\n  }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Columns",
                "rawText": "Columns",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 5,
                "end": 13
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "React",
                        "rawText": "React",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 27
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "Component",
                        "rawText": "Component",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 37
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 37,
                    "period": {
                        "kind": 255,
                        "pos": 27,
                        "end": 28
                    }
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 37
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "render",
                                "rawText": "render",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 54
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 56
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097346,
                                            "expression": {
                                                "kind": 66224,
                                                "expression": {
                                                    "kind": 66176,
                                                    "openingFragment": {
                                                        "kind": 133,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 8192,
                                                        "start": 77,
                                                        "end": 92
                                                    },
                                                    "children": {
                                                        "kind": 124,
                                                        "children": [
                                                            {
                                                                "kind": 137,
                                                                "text": "\n              ",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 8192,
                                                                "parent": null,
                                                                "start": 92,
                                                                "end": 107
                                                            },
                                                            {
                                                                "kind": 66175,
                                                                "openingElement": {
                                                                    "kind": 4228,
                                                                    "tagName": {
                                                                        "kind": 129,
                                                                        "text": "td",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 8192,
                                                                        "start": 108,
                                                                        "end": 110
                                                                    },
                                                                    "attributes": {
                                                                        "kind": 123,
                                                                        "attributesList": [],
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 8192,
                                                                        "start": 110,
                                                                        "end": 110
                                                                    },
                                                                    "typeArguments": null,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 8192,
                                                                    "start": 107,
                                                                    "end": 111
                                                                },
                                                                "children": {
                                                                    "kind": 124,
                                                                    "children": [
                                                                        {
                                                                            "kind": 137,
                                                                            "text": "Hello",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 8192,
                                                                            "parent": null,
                                                                            "start": 111,
                                                                            "end": 116
                                                                        }
                                                                    ],
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 8192,
                                                                    "start": 111,
                                                                    "end": 116
                                                                },
                                                                "closingElement": {
                                                                    "kind": 4221,
                                                                    "tagName": {
                                                                        "kind": 129,
                                                                        "text": "td",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 8192,
                                                                        "start": 118,
                                                                        "end": 120
                                                                    },
                                                                    "flags": 32768,
                                                                    "symbol": null,
                                                                    "transformFlags": 8192,
                                                                    "start": 116,
                                                                    "end": 121
                                                                },
                                                                "flags": 32768,
                                                                "symbol": null,
                                                                "transformFlags": 8192,
                                                                "start": 107,
                                                                "end": 121
                                                            },
                                                            {
                                                                "kind": 137,
                                                                "text": "\n              ",
                                                                "flags": 32768,
                                                                "symbol": null,
                                                                "transformFlags": 8192,
                                                                "parent": null,
                                                                "start": 121,
                                                                "end": 136
                                                            },
                                                            {
                                                                "kind": 66175,
                                                                "openingElement": {
                                                                    "kind": 4228,
                                                                    "tagName": {
                                                                        "kind": 129,
                                                                        "text": "td",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 8192,
                                                                        "start": 137,
                                                                        "end": 139
                                                                    },
                                                                    "attributes": {
                                                                        "kind": 123,
                                                                        "attributesList": [],
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 8192,
                                                                        "start": 139,
                                                                        "end": 139
                                                                    },
                                                                    "typeArguments": null,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 8192,
                                                                    "start": 136,
                                                                    "end": 140
                                                                },
                                                                "children": {
                                                                    "kind": 124,
                                                                    "children": [
                                                                        {
                                                                            "kind": 137,
                                                                            "text": "World",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 8192,
                                                                            "parent": null,
                                                                            "start": 140,
                                                                            "end": 145
                                                                        }
                                                                    ],
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 8192,
                                                                    "start": 140,
                                                                    "end": 145
                                                                },
                                                                "closingElement": {
                                                                    "kind": 4221,
                                                                    "tagName": {
                                                                        "kind": 129,
                                                                        "text": "td",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 8192,
                                                                        "start": 147,
                                                                        "end": 149
                                                                    },
                                                                    "flags": 32768,
                                                                    "symbol": null,
                                                                    "transformFlags": 8192,
                                                                    "start": 145,
                                                                    "end": 150
                                                                },
                                                                "flags": 32768,
                                                                "symbol": null,
                                                                "transformFlags": 8192,
                                                                "start": 136,
                                                                "end": 150
                                                            },
                                                            {
                                                                "kind": 137,
                                                                "text": "\n            ",
                                                                "flags": 32768,
                                                                "symbol": null,
                                                                "transformFlags": 8192,
                                                                "parent": null,
                                                                "start": 150,
                                                                "end": 163
                                                            }
                                                        ],
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 8192,
                                                        "start": 92,
                                                        "end": 163
                                                    },
                                                    "closingFragment": {
                                                        "kind": 638,
                                                        "flags": 32768,
                                                        "symbol": null,
                                                        "transformFlags": 8192,
                                                        "start": 163,
                                                        "end": 166
                                                    },
                                                    "flags": 32768,
                                                    "symbol": null,
                                                    "transformFlags": 8192,
                                                    "start": 77,
                                                    "end": 166
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 75,
                                                "end": 174
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 58,
                                            "end": 175
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 58,
                                    "end": 175
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 56,
                                "end": 179
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 54,
                            "end": 179
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 39,
                        "end": 179
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 39,
                "end": 181
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 181
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 181
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

