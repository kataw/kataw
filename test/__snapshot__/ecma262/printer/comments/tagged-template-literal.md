# Kataw parser test case

## Input

`````js
foo``; // comment

foo // comment
``;

foo // comment
`
`;

foo /* comment */`
`;

foo /* comment */
`
`;
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
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 5
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 22
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 36
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 6,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 6,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 42
                },
                "template": {
                    "kind": 458761,
                    "text": "\n",
                    "rawText": "\n",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 57
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 37,
                "end": 57
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 37,
            "end": 58
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 58,
                    "end": 63
                },
                "template": {
                    "kind": 458761,
                    "text": "\n",
                    "rawText": "\n",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 63,
                    "end": 80
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 58,
                "end": 80
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 58,
            "end": 81
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 81,
                    "end": 86
                },
                "template": {
                    "kind": 458761,
                    "text": "\n",
                    "rawText": "\n",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 86,
                    "end": 104
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 81,
                "end": 104
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 81,
            "end": 105
        }
    ],
    "isModule": false,
    "source": "foo``; // comment\n\nfoo // comment\n``;\n\nfoo // comment\n`\n`;\n\nfoo /* comment */`\n`;\n\nfoo /* comment */\n`\n`;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 105
}
```

### Printed

```javascript
foo``;
foo``;

foo`
`;

foo`
`;

foo`
`;

```

### Diagnostics

```javascript
✔ No errors
```

